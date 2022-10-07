package ca.reachweb.msp;

import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;

public class ReadFileFromGit {
    public static void main(String[] args) throws IOException {
        String url_string = "https://github.com/sasidharpatnaik/msp/blob/main";
        URL url = new URL(url_string);
        URLConnection urlConnection = url.openConnection();
        urlConnection.setRequestProperty("X-Requested-With", "Curl");
    }
}
