using PensionerDetailAPI.Model;
using PensionerDetailAPI.Repository;

namespace PensionerDetailAPI.Provider
{
    public class RequestProvider : IRequestProvider
    {


        IRequestRepository _repo;

        public RequestProvider(IRequestRepository repo)
        {
            _repo = repo;
        }

        public PensionerDetail PensionerDetailByAadhaar(string aadharNumber)
        {
            return _repo.PensionerDetailByAadhaar(aadharNumber);
        }

    }
}
