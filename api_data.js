define({ "api": [
  {
    "type": "post",
    "url": "DoPayment/:paymentRequestID",
    "title": "Makes a payment.",
    "version": "0.0.1",
    "name": "DoPayment",
    "group": "Payment",
    "description": "<p>Makes a payment with the given payment request ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "paymentRequestID",
            "description": "<p>The payment request's ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST https://testapi.valitor.is:444/PaymentManager/DoPayment/24e7facd-cf63-47b5-9b81-8e94cc68d75 --header \"Content-length:0\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "InitiatePaymentRequestResult",
            "description": "<p>The accepted request's GUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DoPaymentResult",
            "description": "<p>The results from the payment procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DoPaymentResult.PaymentDateTime",
            "description": "<p>The date of the payment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DoPaymentResult.ResponseCode",
            "description": "<p>The payment's respone code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Microsoft-HTTPAPI/2.0 200 OK\n{\n  \"DoPaymentResult\": \n  {\n    \"PaymentDateTime\": \"/Date(1466440468681+0000)/\"\n    \"ResponseCode\": \"00\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "https://testapi.valitor.is:444/PaymentManagerDoPayment/:paymentRequestID"
      }
    ]
  },
  {
    "type": "post",
    "url": "/InitiatePaymentRequest/:payeeID/:amount/:currency/:timeToLive",
    "title": "Initiates a payment with a request.",
    "version": "0.0.1",
    "name": "InitiatePaymentRequest",
    "group": "Payment",
    "description": "<p>Initiates a payment with a request.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "payeeID",
            "description": "<p>The payee's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>The amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>The currency code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeToLive",
            "description": "<p>States how long the request should live.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST https://testapi.valitor.is:444/PaymentManager/InitiatePaymentRequest/dda616b7-6ecf-46c2-aa4c-d8c97fcfe2f9/10/840/30 --header \"Content-length:0\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Guid",
            "optional": false,
            "field": "InitiatePaymentRequestResult",
            "description": "<p>The accepted request's GUID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Microsoft-HTTPAPI/2.0 200 OK\n{\n  \"InitiatePaymentRequestResult\": \"7a933afe-e035-420a-9804-de3b3b09db08\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/example.js",
    "groupTitle": "Payment",
    "sampleRequest": [
      {
        "url": "https://testapi.valitor.is:444/PaymentManager/InitiatePaymentRequest/:payeeID/:amount/:currency/:timeToLive"
      }
    ]
  }
] });
