package splitphase;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

class OrderCounterTest {
    public static final String FILENAME = Thread.currentThread().getContextClassLoader().getResource("orders.json").getFile().substring(1);

    private OrderCounter orderCounter;

    @BeforeEach
    public void setUp() {
        orderCounter = new OrderCounter();
    }

    @Test
    @DisplayName("모든 주문을 카운트")
    public void exam1() throws IOException {
        Assertions.assertEquals(8, orderCounter.run(new String[]{FILENAME}));
    }

    @Test
    @DisplayName("ready 상태 주문만 카운트")
    public void exam2() throws IOException {
        Assertions.assertEquals(4, orderCounter.run(new String[]{"-r", FILENAME}));
    }
}