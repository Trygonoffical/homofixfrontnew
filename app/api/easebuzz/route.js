// const handler2 = async (req, res) => {
//     const newMkey = req.body.Mkey;
//     const Mkey = '2PBP7IABZ2';
//     const predata = {
//       'key': Mkey,
//       'txnid' : 'test101',
//       'amount': 100.0,
//       'productinfo': 'testing',
//       'firstname': 'vikas',
//       'phone': '8989898989',
//       'email': 'vikasgupta282@gmail.com',
//       'hash': 'b1ee3658d3f5caab82d1e9abcafa5143df6c89ce5ba3c8db55a1c2b0f3dca6ed668e89bc4a57f65f4598f00107a2c031f63bde90e55e2b496286dd1cdea1477e',
//       'surl': 'https://homofixcompany.com/about',
//       'furl': 'https://homofixcompany.com/about'
//     }

   
//       const response = await fetch('https://testpay.easebuzz.in/payment/initiateLink', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: JSON.stringify(predata),
//       });
//       try {
//       const data = await response.json();
//        return res.send(JSON.stringify({ "success": data}));
//       // if (response.ok) {
//       //   const data = await response.json();
//       //  return res.end(JSON.stringify(data))
//       // } else {
//       //   console.error("Request failed with status:", response.status);
//       //   return res.end(JSON.stringify({"error": error.message}))
//       // }
//     } catch (error) {
//       // console.error("An error occurred:", error);
//       return res.send(JSON.stringify({"error": error.message}));
//     }
//   }



//   export default handler2


// pages/api/easebuzz.js

export default async function handler(req, res) {
  console.log('req-data --- api call', req)
  // try {
    
  //   const response = await fetch('https://testpay.easebuzz.in/payment/initiateLink', {
  //     method: 'POST', // or 'GET' or any other method you need
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(req.body), // Forward the request body if needed
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     res.status(response.status).json(data);
  //   } else {
  //     res.status(500).json({ error: 'Request to Easebuzz failed with status:', response: response.status });
  //   }
  // } catch (error) {
  //   res.status(500).json({ error: 'An error occurred:', error:error.message });
  // }
}
