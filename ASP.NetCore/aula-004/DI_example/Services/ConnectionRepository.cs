namespace aula_004.Inject_example {

    public class ConnectionRepository : IConnectionRepository {
        public string nameOf { get; set; }

        public ConnectionRepository(string Value) { this.nameOf = Value; }
    }

}