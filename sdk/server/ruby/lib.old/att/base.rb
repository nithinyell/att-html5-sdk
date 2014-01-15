require 'mechanize'
require 'logger'
require 'json'
require 'base64'
require 'openssl'
require 'mime/types'
require 'uuid'

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE


require File.dirname(__FILE__) + '/clientCredentialsManager'
#require File.dirname(__FILE__) + '/info'
require File.dirname(__FILE__) + '/location'
require File.dirname(__FILE__) + '/mms'
require File.dirname(__FILE__) + '/mim'
require File.dirname(__FILE__) + '/mobo'
require File.dirname(__FILE__) + '/oauth'
require File.dirname(__FILE__) + '/payment'
require File.dirname(__FILE__) + '/response'
require File.dirname(__FILE__) + '/sms'
require File.dirname(__FILE__) + '/speech'
require File.dirname(__FILE__) + '/wap'

module Sencha
  module ServiceProvider
    module Att

=begin rdoc
/**
 * The Sencha::ServiceProvider::Att::Base class.
 *
 * This class provides reusable and extend-able server code written in Ruby. The SDK server takes requests from the client side Att.Provider object and maps them to the corresponding server side method which takes care of sending the requests to the AT&T API Platform.
 *
 * You can create an instance directly like this:
 *
 *      @provider = Sencha::ServiceProvider::Att::Base.new(
 *        :client_id            => "XXXXXX",
 *        :client_secret        => "XXXXXX",
 *        :shortcode            => "XXXXXX",
 *        :host                 => "https://api.att.com",
 *        :local_server         => "http://127.0.0.1:4567",
 *        :client_model_methods => %w(sendSms smsStatus receiveSms sendMms mmsStatus wapPush requestChargeAuth subscriptionDetails refundTransaction transactionStatus subscriptionStatus getNotification acknowledgeNotification),
 *        :client_model_scope   => "WAP,SMS,MMS,PAYMENT"
 *      )
 *
 * You can also create an instance using the Sencha::ServiceProvider::Base class' init factory method.  Make sure you also include the **provider** property and set it to **att**.
 *
 *     @provider = Sencha::ServiceProvider::Base.init(
 *       :provider             => 'att',
 *       :client_id            => "XXXXXX",
 *       :client_secret        => "XXXXXX",
 *       :shortcode            => "XXXXXX",
 *       :host                 => "https://api.att.com",
 *       :local_server         => "http://127.0.0.1:4567",
 *       :client_model_methods => %w(sendSms smsStatus receiveSms sendMms mmsStatus wapPush requestChargeAuth subscriptionDetails refundTransaction transactionStatus subscriptionStatus getNotification acknowledgeNotification),
 *       :client_model_scope   => "WAP,SMS,MMS,PAYMENT"
 *     )
 *
 * **Note** The SDK disables SSL certificate verification by default. In its current state, it will accept any certificate returned by the AT&T API server.
 * The data being transmitted will still be encrypted using SSL but the SDK assumes that api.att.com is owned by AT&T.
 * This is done for performance reasons.
 * If your application requirements need a higher level of security then you can remove the following code and manually install
 * the SSL certificate used by api.att.com so that it can be validated each time a request is made. This will result in slower API calls.
 *
 *  @class Sencha.ServiceProvider.Att.Base
 *  @extends Sencha.ServiceProvider.Att
 *
 * @cfg {String} client_id The apiKey generated when creating an app in the AT&T Dev Connect portal.
 * @cfg {String} client_secret The secretKey generated when creating an app in the AT&T Dev Connect portal.
 * @cfg {String} local_server The url of the locally running server that is used to build the callback urls.
 * @cfg {String} host The url endpoint through which all AT&T API requests are made.
 * @cfg {String} client_model_scope The comma deliminated list of scopes that the application wants to gain access to when making API calls that use Autonomous Client.
 * @cfg {String[]} client_model_methods The list of methods that can be called using the Autonomous Client authentication model.
 *
 */
=end
      class Base

        # This line includes all the AT&T API methods
        include Sencha::ServiceProvider::Att

        def initialize(config)
          raise ArgumentError, "client_id must be set" unless @client_id = config[:client_id]
          raise ArgumentError, "client_secret must be set" unless @client_secret = config[:client_secret]
          raise ArgumentError, "local_server must be set" unless @local_server = config[:local_server]
          raise ArgumentError, "host must be set" unless @base_url = config[:host]
          raise ArgumentError, "client_model_scope must be set" unless @client_model_scope = config[:client_model_scope]
          raise ArgumentError, "client_model_methods must be set" unless @client_model_methods = config[:client_model_methods]


          # Mechanize is the Ruby Gem used for communicating with REST APIs. It can make REST requests
          # such as GET and POST with parameters and also handles Cookies and Redirects automatically.
          @agent = Mechanize.new

          # This triggers a timeout error if the request takes longer than 60 seconds.
          @agent.read_timeout = 60

          # This will log requests and response headers to the console if the Debug flag is set.
          if Sencha::DEBUG == :all
            @agent.log = Logger.new(STDOUT)
            puts "CALLED #{caller.join("\n")}"
            puts "\nAT&T Provider initialized.\n\n"
            puts "API endpoint:       #{@base_url}"
            puts "Client ID:          #{@client_id}"
            puts "Client Secret:      #{@client_secret}"
            puts "Local Server:       #{@local_server}"
            puts "client model scope: #{@client_model_scope}"
          end

        end

=begin rdoc
/**
 * Makes a GET request to the specified URL with headers set to send and receive JSON.
 * @method json_get
 * @param {String} url the URL to request
 * @param {Array} h The headers that will be added to the request       
 * @return a Response object
 */
=end
        def json_get(url, h={})
          begin
            
            headers = {
              "Accept" => 'application/json',
              'Content-Type' => 'application/json'
            }
            
            headers.merge!(h);
            
            if Sencha::DEBUG == :all
              puts "GET request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
            end

            Response.new @agent.get(url, [], nil, headers)
          rescue Exception => e
            Response.new e
          end
        end

=begin rdoc
/**
 * Makes a GET requet to the specified URL and extracts the 'location' value returned in the HEADER
 * @method get_header_location
 * @return a Location string
 * @param {String} url the URL to request
 */
=end
        def get_header_location(url)
          begin

            if Sencha::DEBUG == :all
              puts "GET request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
            end

            @agent.redirect_ok = false
            result = @agent.get(url)
            result.header['location']

          end
        end

=begin rdoc
/**
 * Makes a POST request to the specified URL with headers set to send and receive JSON.
 * @method json_post
 * @param {String} url the URL to request
 * @param {Object} req the data to send in the post
 * @param {Array} h The headers that will be added to the request
 * @return a Response object
 */
=end
        def json_post(url, req, h={})
          begin
            
            headers = {
              "Accept" => 'application/json',
              'Content-Type' => 'application/json'
            }

            headers.merge!(h);  
            
            if Sencha::DEBUG == :all
              puts "POST request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
              puts "Request Body: \n"
              puts req
            end

            Response.new @agent.post(url, req, headers)
          rescue Exception => e
            Response.new e
          end
        end

=begin rdoc
/**
 * Makes a POST request to the specified URL with the Content-Type header set to application/x-www-form-urlencoded.
 * @method form_post
 * @param {String} url the URL to request
 * @param {String} req the data to send in the post
 * @return a Response object
 */
=end
        def form_post(url, req)
          begin
            if Sencha::DEBUG == :all
              puts "FORM POST request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
              puts "Request Body: \n"
              puts req
            end

            Response.new @agent.post(url, req, {
              'Content-Type' => 'application/x-www-form-urlencoded'
            })
          rescue Exception => e
            Response.new e
          end
        end

=begin rdoc
/**
 * Makes a PUT request to the specified URL with headers set to send and receive JSON.
 * @method json_put
 * @param {String} url the URL to request
 * @param {Object} req the data to send in the post
 * @param {Array} h The headers that will be added to the request
 * @return a Response object
 */
=end
        def json_put(url, req, h={})
          begin

            headers = {
              "Accept" => 'application/json',
              'Content-Type' => 'application/json'
            }
            
            headers.merge!(h);
            
            
            if Sencha::DEBUG == :all
              puts "PUT request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
              puts "Request Body: \n"
              puts req
            end


            
            Response.new @agent.put(url, req, headers)
            
          rescue Exception => e
            Response.new e
          end
        end

=begin rdoc
/**
 * This is a special version of the json_post method in which the content is MIME encoded.
 * @method json_post_mime
 * @param {String} url the URL to request
 * @param {Object} mimeContent the MIME data to send in the post
 * @param {Array} h The headers that will be added to the request
 * @return a Response object
 */
=end
        def json_post_mime(url, mimeContent, h ={})
          begin

            if Sencha::DEBUG == :all
              puts "POST request initiated from: "
              puts "           #{caller.select{|c| c =~ /(att|app\.rb)/}.join("\n           ")}\n\n"
              puts "Request Body: \n"
              puts mimeContent.content
            end

            headers = {
              'Accept' => 'application/json',
              'Content-Type' => mimeContent.header
            }

            headers.merge!(h)
                        
            Response.new @agent.post(url, mimeContent.content, headers)
            
          rescue Exception => e
            Response.new e
          end
        end

=begin rdoc
/**
 * Returns the value stored in the client_model_token session variable.
 * @method get_access_token
 * @return {String} access_token Returns the value stored in the client_model_token session variable.
 */
=end
        def get_access_token()
          session[:client_model_token]
        end

=begin rdoc
/**
 * If a method starts with `direct_` then assume it exists and wrap the result, for use with an Ext.Direct style response.
 * @method method_missing
 * @param {String} method the method to execute
 * @return {String} access_token Returns the value stored in the client_model_token session variable.
 */
=end
        def method_missing(m, *args, &block)

          if m.to_s =~ /^direct_(.*)$/
            response = self.send($1.to_sym, *args, &block)

            if response.is_a?(Sencha::ServiceProvider::Att::Response)
              if response.error?
                { :error => response.error }
              else
                { :result => response.data }
              end
            else
              { :result => response }
            end
          else
            { :error => "No such method" }
          end

        end

        # For use in testing, this provides direct access to the Mechanize instance.
        def agent
          @agent
        end

      end
    end
  end
end