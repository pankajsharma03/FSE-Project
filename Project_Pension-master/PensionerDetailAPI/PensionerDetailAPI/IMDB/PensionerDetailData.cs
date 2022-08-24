using PensionerDetailAPI.Model;
using System.Collections.Generic;

namespace PensionerDetailAPI.IMDB
{
    public class PensionerDetailData
    {
        public static List<PensionerDetail> details = new List<PensionerDetail>()
        {
            new PensionerDetail()
            {
                Id = 1,
                DateOfBirth = "01-Jan-2001",
                PAN = "BVDPA1234A",
                AadharNumber = "111111111111",
                SalaryEarned = 98000,
                Allowances = 25000,
                PensionClassification = "Self",
                bankDetail = new BankDetail()
                {
                    Id =1,
                    BankName = "HDFC",
                    AccountNumber = "9876543213333",
                    BankType = "Private"
                }

            },
                        new PensionerDetail()
            {
                Id = 2,
                DateOfBirth = "01-Feb-2001",
                PAN = "BVDPA1234B",
                AadharNumber = "222222222222",
                SalaryEarned = 100000,
                Allowances = 41000,
                PensionClassification = "Self",
                bankDetail = new BankDetail()
                {
                    Id =1,
                    BankName = "KOTAK",
                    AccountNumber = "9876543210000",
                    BankType = "Private"
                }

            },            new PensionerDetail()
            {
                Id = 1,
                DateOfBirth = "01-Mar-2001",
                PAN = "BVDPA1234C",
                AadharNumber = "333333333333",
                SalaryEarned = 91000,
                Allowances = 20000,
                PensionClassification = "Family",
                bankDetail = new BankDetail()
                {
                    Id =1,
                    BankName = "SBI",
                    AccountNumber = "9876543211111",
                    BankType = "Public"
                }

            },            new PensionerDetail()
            {
                Id = 1,
                DateOfBirth = "01-Apr-2001",
                PAN = "BVDPA1234D",
                AadharNumber = "444444444444",
                SalaryEarned = 118000,
                Allowances = 55000,
                PensionClassification = "Self",
                bankDetail = new BankDetail()
                {
                    Id =1,
                    BankName = "UCO",
                    AccountNumber = "9876543214444",
                    BankType = "Public"
                }

            },
        };

    }
}
