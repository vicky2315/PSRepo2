package steps;

import dataProvider.ConfigFileReader;
import io.cucumber.java.en.*;

import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.is;


public class MyStepdefs {
    @Given("user sets base URI of JSON server")
    public void userPerformsGETOperationFor() throws Throwable {
        BDDStyleMethod.setBaseURI();

    }


    @When("user performs POST for creating post")
    public void userPerformsPOSTForCreatingPost() {
        System.out.println("Implementing post...");
    }

    @Then("new post has been created")
    public void newPostMustBeCreated() {
        System.out.println("New Post has been created");

    }


    @And("new {string},{string} and {string} are passed")
    public void newAndArePassed(String id, String name, String aname) {
        BDDStyleMethod.PostMethod(id,name,aname);
    }


    @Then("post with {string} must be deleted")
    public void postWithMustBeDeleted(String id) {
        BDDStyleMethod.DeleteMethod(id);
    }

    @When("user performs DELETE for deleting post")
    public void userPerformsDELETEForDeletingPost() {
        System.out.println("Deleting the post");
    }

    @Then("author name must say {string}")
    public void authorNameMustSay(String auth) {
        System.out.println("Correct author");
        System.out.print("Trial");
    }

    @When("user performs GET for post  number {string}")
    public void userPerformsGETForPostNumber(String postid) {
        BDDStyleMethod.SimpleGetMethod(postid);
    }
}

