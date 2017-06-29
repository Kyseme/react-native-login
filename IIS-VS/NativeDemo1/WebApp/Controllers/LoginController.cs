using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UserLogin(string userName,string userPwd)
        {
            //string userName = Request.Form["LoginCode"].Trim();
            //string userPwd = Request.Form["LoginPwd"].Trim();
            UserInfoService userInfoService = new UserInfoService();
            UserInfo userInfo = userInfoService.GetUserInfo(userName, userPwd);
            Dictionary<string, object> dic = new Dictionary<string, object>();
            dic.Add("username", userInfo.UserName);
            dic.Add("password", userInfo.UserPwd);
            return Json(dic, JsonRequestBehavior.AllowGet);
            /*
             * return Json(new
             {
                 UserName = "Test User Name",
                 Email = "Test@Test.com",
                 Desc = "Test Desc"
             });
             * /

             /*
             if (userInfo != null)
             {
                 Session["userInfo"] = userInfo;
                 Response.Write(@"<script>alert('成功！');</script>");
                 return Content("ok:登录成功");
             }
             else
             {
                 Response.Write(@"<script>alert('登录失败！');</script>");
                 return Content("no:登录失败");
             }
             */

        }

        public JsonResult LoginUser(string username, string pwd)
        {
            //string username = Request[];
            //string pwd = Request["pwd"];
            //JsonResult ret = new JsonResult();
            // string username, string pwd           
            //string username1 = Request.Form["username"];
            //string pwd1 = Request.Form["pwd"];
            message msg = null;
            UserInfoService userInfoService = new UserInfoService();
            UserInfo userInfo = userInfoService.GetUserInfo(username, pwd);
            UserInfo userName = userInfoService.GetUserName(username);
            if (userName != null)
            {
                if (userInfo != null)
                {
                    Session["userInfo"] = userInfo;
                    msg = new message(true, "Success");
                }
                else
                {
                    msg = new message(false, "Fail");
                }             
            }
            else
            {            
                msg = new message(false, "Error");
            }

            return Json(msg, JsonRequestBehavior.AllowGet);
        }
        public ActionResult LoginUser1()
        {
            message msg = null;
            Stream req = Request.InputStream;
            StreamReader reader = new StreamReader(req);
            string text = reader.ReadToEnd();
            return Content(text);
            //return Json(msg, JsonRequestBehavior.AllowGet);
        }
        public JsonResult AddUser(string username, string pwd)
        {
           
            message msg = null;
            UserInfoService userInfoService = new UserInfoService();
            
            
            UserInfo userInfo = userInfoService.GetUserName(username);
            if(userInfo == null)
            {
                userInfoService.SetUserInfo(username, pwd);
                msg = new message(true, "Success");
            }
            else
            {
                msg = new message(false, "Fail");
            }
            return Json(msg, JsonRequestBehavior.AllowGet);
        }
    }
    class message
    {
        bool success;
        string msg;

        public message(bool success, string msg)
        {
            this.success = success;
            this.msg = msg;
        }

        public bool Success
        {
            get { return success; }
            set { success = value; }
        }
        public string Msg
        {
            get { return msg; }
            set { msg = value; }
        }
    }
}