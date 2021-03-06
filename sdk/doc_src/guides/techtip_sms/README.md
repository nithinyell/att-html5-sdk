SMS Cookbook
===

Overview
---
This cookbook explains how to create an instance of the AttApiClient class in your app and use it to access methods in the AT&T API Platform SDK for HTML5 for sending, receiving, and checking the status of SMS messages.

What do I need to start?
---

1. Include att-api-client.js as a dependency by adding the following code to your HTML:  

        <script type="text/javascript" src="att-api-client.js"></script>

Adjust the _src_ attribute value to match the site path where you store the _att_api_client.js_ file.


How do I send an SMS message?
---

Use the sendSms method. For more information about the parameters of this method,  refer to AttApiClient.SMS.sendSms. 

Define the success and failure callbacks as anonymous functions or pass them as parameters

<code>

    AttApiClient.SMS.sendSms({
        addresses : 'phone number goes here',
        message : 'The message'
		},
        onSuccess,
        onFailure
    );

    //callback for success response
    function onSuccess(response){
        // Handle the response here
        console.log(response);
    };

    //callback for failed call
    function onFailure(error){
      // Handle the error here
      console.log(error);
    };

</code>  

###Tip: Normalize the phone number

Use the AttApiClient.util.normalizePhoneNumber method to convert a phone number into the format required by the AT&T API Platform:

<code>

    var phoneNumber = '(425)-223-0000';

    AttApiClient.SMS.sendSms({
        addresses : AttApiClient.util.normalizePhoneNumber(phoneNumber), // will produce '4252230000'
        message : 'The message'
    });    

</code> 


###Tip: Validate the phone number
  
To check that a phone number is valid, use the AttApiClient.util.isValidPhoneNumber method:

<code>

    var phoneNumber = '425223000a';

    if (AttApiClient.util.isValidPhoneNumber(phoneNumber)) {

        AttApiClient.SMS.sendSms({
            addresses : AttApiClient.util.normalizePhoneNumber(phoneNumber),
            message : 'The message'
        });    

    } 

</code>


How do I check the status of an SMS message?
---

1. Save the SMS Id.  

    When an SMS message is sent, the success callback receives a response object containing an Id that identifies the message. It is important to save this Id so it can be used by the getSmsStatus method to check the message status. 

        var messageId;

        //...

        AttApiClient.SMS.sendSms({/*...*/});


        function onSuccess(response){
            //save the Id
            messageId = response.outboundMessageResponse.messageId;
        };
    
2. Get the SMS status. 

    You can check the status of an SMS message you have sent by using the AttApiClient.SMS.smsStatus method.

        AttApiClient.SMS.smsStatus(
			{ id : messageId },
            function success(response){
                console.log(response);
            },
            function fail(error){
                console.log(error);
            }
        );

