using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DAL
{
   public class SqlHelper
    {
        private static readonly string connString = ConfigurationManager.ConnectionStrings["connStr"].ConnectionString;
        public static DataTable GetTable(string sql,CommandType type,params SqlParameter[] pars)
        {
            using(SqlConnection conn=new SqlConnection(connString))
            {
                using(SqlDataAdapter adapter=new SqlDataAdapter(sql, conn))
                {
                    adapter.SelectCommand.CommandType = type;
                    if (pars != null)
                    {
                        adapter.SelectCommand.Parameters.AddRange(pars);
                    }
                    DataTable da = new DataTable();
                    adapter.Fill(da);
                    return da;
                }
            }
        }
        //ExecuteNonQuery 执行语句用于 增删改
        public static int ExecuteNonquery(string sql, CommandType type, params SqlParameter[] pars)
        {
            using(SqlConnection conn =new SqlConnection(connString))
            {
                using(SqlCommand cmd=new SqlCommand(sql, conn))
                {
                    ////设置当前执行的是单参数的sql语句还是存储过程
                    cmd.CommandType = type;
                    if (pars != null)
                    {
                        cmd.Parameters.AddRange(pars);
                    }
                    conn.Open();
                    return cmd.ExecuteNonQuery();
                }
            }
        }
        //行语句返回结果集首行首列(单个值)的方法
        public static object ExecuteScalar(string sql, CommandType cmdType, params SqlParameter[] pms)
        {
            using (SqlConnection con = new SqlConnection(connString))
            {
                using (SqlCommand cmd = new SqlCommand(sql, con))
                {
                    cmd.CommandType = cmdType;
                    if (pms != null)
                    {
                        cmd.Parameters.AddRange(pms);
                    }
                    con.Open();
                    object obj = cmd.ExecuteScalar();
                    con.Close();
                    con.Dispose();
                    return obj;
                }
            }
        }
        //返回sqlDataReader  ExecuteReader 用于只进方式一条条读出数据

        public static SqlDataReader ExecuteReader(string sql, CommandType cmdType, params SqlParameter[] pms)
        {
            SqlConnection con = new SqlConnection(connString);
            using (SqlCommand cmd = new SqlCommand(sql, con))
            {
                cmd.CommandType = cmdType;
                if (pms != null)
                {
                    cmd.Parameters.AddRange(pms);
                }
                try
                {
                    con.Open();
                    return cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
                catch
                {
                    con.Close();
                    con.Dispose();
                    throw;
                }
            }

        }      
    }
}
