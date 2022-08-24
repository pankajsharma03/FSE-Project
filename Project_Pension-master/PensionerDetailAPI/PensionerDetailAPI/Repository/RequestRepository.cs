
using PensionerDetailAPI.IMDB;
using PensionerDetailAPI.Model;
using System;

namespace PensionerDetailAPI.Repository
{
    public class RequestRepository : IRequestRepository
    {

        PensionerDetailData data = new PensionerDetailData();
        public PensionerDetail PensionerDetailByAadhaar(string aadharNumber)
        {
            try
            {
                PensionerDetail request = new PensionerDetail();
                foreach (var item in PensionerDetailData.details)
                {
                    if (item.AadharNumber == aadharNumber)
                    {
                        request = item;
                        break;
                    }
                    else
                    {
                        request = null;
                    }
                }
                return request;

            }
            catch (Exception)
            {
                return null;
            }

        }

    }
}
