using Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class BookDal
    {
        public List<Book> GetBook()
        {
            string sql = "select * from T_Book order by Id";
            
            DataTable da = SqlHelper.GetTable(sql, CommandType.Text,null);
            List<Book> list = null;
            if (da.Rows.Count > 0)
            {
                list = new List<Book>();
                Book book = null;
                foreach(DataRow row in da.Rows)
                {
                    book = new Book();
                    LoadEntity(book,row);
                    list.Add(book);
                }
            }
            return list;
        }
        public void LoadEntity(Book book, DataRow row)
        {
            book.Id = Convert.ToInt32(row["Id"]);
            book.Name = row["Name"] != DBNull.Value ? row["Name"].ToString() : string.Empty;
            book.Picture = row["Picture"] != DBNull.Value ? row["Picture"].ToString() : string.Empty;
            book.Desc =  row["Desc"].ToString();

        }
    }
}
