using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class UserInfoService
    {
        UserInfoDal userInfoDal = new UserInfoDal();
        public UserInfo GetUserInfo(string userName,string userPwd)
        {
            return userInfoDal.GetUserInfo(userName, userPwd);
        }
        public void SetUserInfo(string userName, string userPwd)
        {
             userInfoDal.SetUserInfo(userName, userPwd);
        }
        public UserInfo GetUserName(string userName)
        {
            return userInfoDal.GetUserName(userName);
        }
    }
}
