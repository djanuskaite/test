package com.corona.coronazp20t;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;

public class JSON {

    private static String readAll(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }

    public static JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
        InputStream is = new URL(url).openStream();
        try {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            String jsonText2 = "{"+"\"countries\":"+jsonText + "}";
            JSONObject json = new JSONObject(jsonText2);
            return json;
        } finally {
            is.close();
        }
    }

//    public static JSONArray getJSONArray(JSONObject json) throws JSONException {
//        // removing from JSON all unnecessary information and leaving only covid19Stats array
//        int jsonLength = json.toString().length();
//        String covid19Stats = "{" + json.toString().substring(96, jsonLength) + "}";
//
//        // String to JSONObject
//        JSONObject jsonObject = new JSONObject(covid19Stats);
//        //JSONObject to JSONArray
//        JSONArray jsonArray = jsonObject.getJSONArray("covid19Stats");
//
//        return jsonArray;
//    }

    public static JSONArray getJSONArray(JSONObject json) throws JSONException {

        //JSONObject to JSONArray
        JSONArray jsonArray = json.getJSONArray("countries");
        return jsonArray;
    }

    public static ArrayList<Corona> getList(JSONArray jsonArray) throws JSONException {
        ArrayList<Corona> covidList = new ArrayList<Corona>();
        // Extract data from json and store into ArrayList as class objects
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject json_data = jsonArray.getJSONObject(i);
            Corona corona = new Corona(
                    json_data.getString("name"),
                    json_data.getString("capital"),
                    json_data.getString("region"),
                    json_data.getInt("population"),
                    json_data.getString("timezones")
            );
            covidList.add(corona);
        }
        return covidList;
    }

    public static ArrayList<Corona> getCoronaListByQuery(ArrayList<Corona> coronaList, String country) {
        ArrayList<Corona> coronaListByQuery = new ArrayList<Corona>();
        for (Corona corona : coronaList) {
            if (corona.getName().contains(country)) {
                coronaListByQuery.add(corona);
            }
        }
        return coronaListByQuery;
    }

}
