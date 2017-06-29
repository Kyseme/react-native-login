using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;



namespace DAL
{
    public class UserInfoDal
    {
        public UserInfo GetUserInfo(string userName,string userPwd)
        {
            string sql = "select * from T_UserInfo where UserName=@UserName and UserPwd=@UserPwd";
            SqlParameter[] pars =
            { new SqlParameter ("@UserName",SqlDbType.NChar),new SqlParameter ("@UserPwd",SqlDbType.NChar)
            };
            pars[0].Value = userName;
            pars[1].Value = userPwd;
           DataTable da= SqlHelper.GetTable(sql, CommandType.Text, pars);
            UserInfo userInfo = null;
            if (da.Rows.Count > 0)
            {
                userInfo = new UserInfo();
                LoadEntity(userInfo, da.Rows[0]);
            }
            return userInfo;
        }
        public void LoadEntity(UserInfo userInfo, DataRow row)
        {
            userInfo.Id = Convert.ToInt32(row["Id"]);
            userInfo.UserName = row["UserName"] != DBNull.Value ? row["UserName"].ToString() : string.Empty;
            userInfo.UserPwd = row["UserPwd"] != DBNull.Value ? row["UserPwd"].ToString() : string.Empty;
 
        }
        public void SetUserInfo(string userName, string userPwd)
        {
            string sql = "insert into T_UserInfo(UserName,UserPwd) values(@UserName,@UserPwd)";
            SqlParameter[] pars =
            { new SqlParameter ("@UserName",userName),new SqlParameter ("@UserPwd",userPwd)
            };
            int en = SqlHelper.ExecuteNonquery(sql, CommandType.Text, pars);            
        }

        public UserInfo GetUserName(string userName)
        {
            string sql = "select * from T_UserInfo where UserName=@UserName";
            SqlParameter[] pars =
            { new SqlParameter ("@UserName",SqlDbType.NChar)
            };
            pars[0].Value = userName;
            DataTable da = SqlHelper.GetTable(sql, CommandType.Text, pars);
            UserInfo userInfo = null;
            if (da.Rows.Count > 0)
            {
                userInfo = new UserInfo();
                LoadEntity(userInfo, da.Rows[0]);
            }
            return userInfo;
        }


    }
}
