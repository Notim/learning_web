using System;

namespace NET_CORE.ConsoleProgram {
    public class Anytype {
        public string  name { get; set; } 
        public DateTime  dateBirth { get; set; }
        public string  work { get; set; } 
    }
    public class Program {
        public static void Main(string[] args) {
            var obj = new Anytype { 
                name = "Joao vitor paulino martins"
                , dateBirth = DateTime.Now
                , work = "Developer"
            };

            Console.WriteLine("Hello World!");
            
            Console.WriteLine(obj.name);
            Console.WriteLine(obj.dateBirth.ToString());
            Console.WriteLine(obj.work);
        }
    }
}
