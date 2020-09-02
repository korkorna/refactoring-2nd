package splitphase;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class OrderCounter {
    public static void main(String[] args) {
        try {
            System.out.println(run(args));
        } catch (Exception e) {
            System.out.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws java.io.IOException {
        if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
        CommandLine commandLine = new CommandLine();
        String filename = args[args.length -1];
        commandLine.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
        return countOrders(commandLine, args, filename);
    }

    private static long countOrders(CommandLine commandLine, String filename) throws java.io.IOException {
        File input = Paths.get(filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (commandLine.onlyCountReady) {
            return Stream.of(orders)
                    .filter(o -> "ready".equals(o.status))
                    .count();
        } else {
            return orders.length;
        }
    }

    private static class CommandLine {
        public boolean onlyCountReady;
    }

}
