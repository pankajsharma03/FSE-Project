

using PensionerDetailAPI.Model;

namespace PensionerDetailAPI.Provider
{
    public interface IRequestProvider
    {
        public PensionerDetail PensionerDetailByAadhaar(string aadharNumber);

    }
}
