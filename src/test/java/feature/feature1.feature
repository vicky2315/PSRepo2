Feature: Requests on JSON server
Background:
Given  user sets base URI of JSON server

  Scenario Outline: GET operation
    When user performs GET for post  number "<id>"
    Then author name must say "<author>"
    Examples:
    | id | author |
    | 1  | testing |
    | 2  | unicode |

  Scenario Outline: Adding new post using POST Method
    When user performs POST for creating post
    And new "<id>","<name>" and "<author>" are passed
    Then new post has been created
    Examples:
      | id | name   | author     |
      | 15 | Vignesh | RoaldDahl |
      | 21 | 21 Savage | YG      |
      | 50 | no        | icant   |

  Scenario Outline: Deleting a post using DELETE Method
    When user performs DELETE for deleting post
    Then post with "<id>" must be deleted
    Examples:
      | id |
      | 15 |
