using System;
using System.Net.Http;

namespace PensionerDetailAPI
{
    public class Client
    {
        public HttpClient Authapi()
        {
            var client = new HttpClient();
            //client.BaseAddress = new Uri("http://20.204.241.170/");
            client.BaseAddress = new Uri("http://localhost:35485/");

            return client;
        }
    }
}
