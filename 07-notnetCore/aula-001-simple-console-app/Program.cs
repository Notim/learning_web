using System;

namespace app {
    
    class Anytype {
        public string  name { get; set; } 
        public DateTime dateBirth { get; set; }
        public string  work { get; set; } 
        public string  whoHeLoves { get; set; } 
    }
    
    class Program {
        static void Main(string[] args) {
            var Person = new Anytype { 
                name = "Joao vitor paulino martins"
                , dateBirth = DateTime.Now
                , work = "Developer"
                , whoHeLoves = "C# running in linux!! S2"
            };

            Console.WriteLine("Hello World!");
            
            Console.WriteLine(Person.name);
            Console.WriteLine(Person.dateBirth.ToString());
            Console.WriteLine(Person.work);
            Console.WriteLine(Person.whoHeLoves);
            Console.WriteLine(Math.Multi(7,2));
            
        }
    }
    
    static class Math {
        public static int Multi (int arg1, int arg2){
            return (arg1 * arg2);   
        }
    }
}

