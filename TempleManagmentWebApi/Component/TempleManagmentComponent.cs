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
        public  List<TempleManagmemt> GetTempleData()
        {
           SqlConnection con = new SqlConnection(ConnectionString);
          
            SqlCommand Command = new SqlCommand("Select * from Temple", con);
            con.Open();

            var reader=Command.ExecuteReader();
            List< TempleManagmemt > TempleData=new List< TempleManagmemt >();
            while (reader.Read())
            {
                TempleManagmemt templeManagmemt = new TempleManagmemt();

                templeManagmemt.TempleId = (Guid)reader[0];
                templeManagmemt.TempleName = (string)reader[1];
                templeManagmemt.TempleLocation = (string)reader[2];


                TempleData.Add(templeManagmemt);
            }

            return TempleData;
        }
    }
}
