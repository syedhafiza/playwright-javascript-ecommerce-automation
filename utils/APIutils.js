class APIUtils
{
    constructor(apiContext)
    {
        this.apiContext=apiContext;
    }

    async getToken()
    {
          const loginResponse= await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
             { data: loginPayload });
           expect(loginResponse.ok()).toBeTruthy();
           const loginResponseJson= await loginResponse.json();
           const token=loginResponseJson.token;
           console.log(token);
        

    }

}