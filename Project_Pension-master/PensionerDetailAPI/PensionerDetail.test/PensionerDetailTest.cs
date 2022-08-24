using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using PensionerDetailAPI.Controllers;
using PensionerDetailAPI.Provider;
using PensionerDetailAPI.Repository;
using System;
using System.Net;

namespace PensionerDetail.test
{
    public class Tests

    {

        private IRequestRepository repo;

        private IRequestProvider provider;

        private PensionerDetailController _controller;

        string correctAadhaar;

        string incorrectAadhaar;



        [SetUp]

        public void Setup()

        {
            repo = new RequestRepository();
            provider = new RequestProvider(repo);
            _controller = new PensionerDetailController(provider);
            correctAadhaar = "111111111111";
            incorrectAadhaar = "1234";
        }



        [Test]

        public void getPensionerDetailsByAadhar_CorrectAadhaarNumber_ReturnsNotNull()
        {
            var result = _controller.Get(correctAadhaar);
            Assert.IsNotNull(result);
        }

        [Test]

        public void getPensionerDetailsByAadhar_IncorrectAadhaarNumber_ReturnsBadRequest()
        {
            try
            {
                var result = _controller.Get(incorrectAadhaar);
                var response = result as ObjectResult;
                Assert.AreEqual(HttpStatusCode.BadRequest,response.StatusCode);
            }
            catch (Exception e)
            {
                Assert.AreEqual("Object reference not set to an instance of an object.", e.Message);
            }
        }

        [Test]

        public void pensionerDetailByAadhaarProvider_CorrectAadhaarNumber_ReturnsNotNull()

        {

            var result = provider.PensionerDetailByAadhaar(correctAadhaar);

            Assert.IsNotNull(result);

        }

        [Test]

        public void pensionerDetailByAadhaarProvider_IncorrectAadhaarNumber_ReturnsNull()

        {

            var result = provider.PensionerDetailByAadhaar(incorrectAadhaar);

            Assert.IsNull(result);

        }



        [Test]

        public void pensionerDetailByAadhaarRepository_CorrectAadhaarNumber_ReturnsNotNull()

        {

            var result = repo.PensionerDetailByAadhaar(correctAadhaar);

            Assert.IsNotNull(result);

        }



        [Test]

        public void pensionerDetailByAadhaarRepository_IncorrectAadhaarNumber_ReturnsNull()

        {

            var result = repo.PensionerDetailByAadhaar(incorrectAadhaar);

            Assert.IsNull(result);

        }

    }
}