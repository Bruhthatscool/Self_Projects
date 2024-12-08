import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class superapp extends MouseAdapter {
    JFrame frame;
    JButton plus;
    ImageIcon image;
    JLabel label;
    int num;

    public void window() {
        frame = new JFrame("Super App");
        frame.setBounds(75, 75, 500, 500);
        frame.setLayout(null);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        plus = new JButton("+");
        image = new ImageIcon("iconimage.png");
        label = new JLabel("0");

        frame.add(plus);
        frame.add(label);
        frame.setIconImage(image.getImage());

        plus.setBounds(200, 200, 60, 60);
        // plus.setIcon(image);
        // plus.setContentAreaFilled(false);

        // // Optional: Resize the icon to fit the button
        ImageIcon resizedIcon = new ImageIcon(image.getImage().getScaledInstance(60, 60, Image.SCALE_SMOOTH));
        frame.setIconImage(resizedIcon.getImage());

        plus.addMouseListener(this);

        label.setBounds(200, 100, 60, 60);
        label.setFont(new Font("Arial", Font.PLAIN, 50));
    }

    public void mouseClicked(MouseEvent e) {
        JButton b = (JButton) e.getSource();
        String name = b.getText();

        if (name.equals("+")) {
            JFrame extra = new JFrame("extra");
            extra.setBounds(576, 100, 300, 300);
            extra.setVisible(true);
            extra.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

            num = Integer.parseInt(label.getText());
            label.setText(String.valueOf(num + 1));
        }
    }

    public void mousePressed(MouseEvent e) {
        plus.setBackground(Color.PINK);
        plus.setOpaque(true);
    }

    public void mouseReleased(MouseEvent e) {
        if (num % 2 == 0) {
            plus.setBackground(Color.yellow);
        } else {
            plus.setBackground(Color.CYAN);
        }
    }

    public static void main(String args[]) {
        superapp s = new superapp();
        s.window();
    }
}

/*
 * one : animation
 * two : to do list
 */