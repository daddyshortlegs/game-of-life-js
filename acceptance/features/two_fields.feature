Feature: Two field input

  Scenario:
    Given a input that contains two fields
"""
4 4
*...
....
.*..
....
3 5
**...
.....
.*...
0 0
"""
    When I request the result
    Then I expect to see following output
"""
Field #1:
*100
2210
1*10
1110

Field #2:
**100
33200
1*100
"""