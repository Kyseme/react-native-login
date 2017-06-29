using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class BookService
    {
        BookDal bookdal = new BookDal();
        public List<Book> GetBook()
        {
            return bookdal.GetBook();
        }
    }
}
