using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using TempleManagmentWebApi.Interfaces;

namespace TempleManagmentWebApi.Component
{
    public class TempleManagmentComponent: ITempleManagment
    {
        readonly string ConnectionString;
       public TempleManagmentComponent(IConfiguration _configuration)
        {
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        [HttpGet]
        public async Task<List<TempleManagmemt>> GetTempleData()
        {
            using SqlConnection con = new SqlConnection(ConnectionString);
            using SqlCommand command = new SqlCommand("Select * from Temple", con);
            await con.OpenAsync();

            using var reader = await command.ExecuteReaderAsync();
            List<TempleManagmemt> TempleData = new List<TempleManagmemt>();

            while (await reader.ReadAsync())
            {
                TempleManagmemt templeManagmemt = new TempleManagmemt
                {
                    TempleId = reader.GetGuid(0),
                    TempleName = reader.GetString(1),
                    TempleLocation = reader.GetString(2)
                };

                TempleData.Add(templeManagmemt);
            }

            return TempleData;
        }

    }
}
