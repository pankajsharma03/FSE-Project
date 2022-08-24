
using PensionerDetailAPI.Model;

namespace PensionerDetailAPI.Repository
{
    public interface IRequestRepository
    {
        public PensionerDetail PensionerDetailByAadhaar(string aadharNumber);

    }
}
