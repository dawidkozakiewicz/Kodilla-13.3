/* process.stdin - standard input służący do odczytu (przyjmowania informacji z zewnątrz do aplikacji)
Zacznijmy od ustawienia odpowiedniego enkodowania przyjmowanych danych. Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe (potraktuje wejście jako buffer). Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8).
*/

process.stdin.setEncoding('utf-8');

/* Następnym krokiem będzie ustawienie nasłuchiwania na zdarzenia odczytu.*/


process.stdin.on('readable', function() {

  /* tutaj treść tego co ma się wykonać w momencie odczytania wejścia. */
  /* metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu */

  var input = process.stdin.read();
  if (input !== null) {

    /* dzięki metodzie .trim() pozbywamy się wszystkich białych znaków z przodu i za tekstem. */

    var instruction = input.trim();
    switch (instruction) {
      case '/node-version':

        /* process.stdout - standard output służący do wypisywania komunikatów z procesu */

        process.stdout.write('Node version is: ' + process.versions.node);
        break;
      case '/system-language':
        process.stdout.write('System language is ' + process.env.lang);
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    };
  }
});
