package steps;

import dataProvider.ConfigFileReader;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.json.simple.JSONObject;


import java.util.HashMap;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.Matchers.containsInAnyOrder;


public class BDDStyleMethod {
   static String a;
    static ConfigFileReader configFile= new ConfigFileReader();
    public static void SimpleGetMethod(String postNumber)
    {
        given().contentType(ContentType.JSON).when().get(String.format("%s/%s",configFile.getEndPointUri(),postNumber)).then().statusCode(200);
        a=postNumber;
    }
    public static void verifyAuthor(String author)
    {
        given().contentType(ContentType.JSON).when().get(String.format("%s/%s",configFile.getEndPointUri(),a)).then().body("author",is(author));
    }


    public static void PostMethod(String id,String name,String aname)
    {
       // HashMap<String,String> trial= new HashMap<String, String>();
        JSONObject trial=new JSONObject();
        trial.put("id",id);
        trial.put("name",name);
        trial.put("author",aname);
        given().contentType(ContentType.JSON).body(trial).
                when().post(String.format("%s",configFile.getEndPointUri())).then().statusCode(201);
    }
    public static void DeleteMethod(String id)
    {
        given().when().delete(String.format("%s/%s",configFile.getEndPointUri(),id)).then().statusCode(200);
    }
    public static void setBaseURI()
    {
        RestAssured.baseURI=configFile.getBaseUri();
    }
    }
