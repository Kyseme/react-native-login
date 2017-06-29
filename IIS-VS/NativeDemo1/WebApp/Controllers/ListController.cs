using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace WebApp.Controllers
{
    public class ListController : Controller
    {
        BookService bookService = new BookService();
        // GET: List
        public ActionResult Index()
        {
            List<Book> list = bookService.GetBook();
            ViewData["list"] = list;
            return View();
        }


        public ActionResult GetData()
        {
            List<Book> list = bookService.GetBook();
            DataContractJsonSerializer json = new DataContractJsonSerializer(list.GetType());
            string szJson = "";
            //序列化
            using (MemoryStream stream = new MemoryStream())
            {
                json.WriteObject(stream, list);
                szJson = Encoding.UTF8.GetString(stream.ToArray());
            }
            return Content(szJson);
        }

    }
}