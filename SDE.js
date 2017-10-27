/*
Imagine you have a log file that contains a list of (userId, pageId) tuples
Eg:

visits = [
    ('u1', 'p1'),
    ('u1', 'p2'),
    ('u1', 'p3'),
    ('u2', 'p2'),
    ('u1', 'p4'),
    ('u1', 'p5'),
    ('u1', 'p2'),
    ('u1', 'p3'),
    ('u1', 'p4'),
    ('u1', 'p6'),
    ('u2', 'p3'),
    ('u2', 'p4')   # mostPopular()
]

The most common 3-page sequence here is ('p2', 'p3', 'p4') because it occurs twice for 'u1' and once for 'u2'.

* Build a class with a method named accept which takes userId and pageId arguments as strings.

* Build a mostPopular method which returns the most popular 3-page sequence.
*/

public class someClass(){
    private Dictionary<string,int> visitDict= new Dictionary<string,int>();

    Dictionary<string,List<string>> tempDict = new Dictionary<string,List<string>>();
    public void accept(string userId, string pageId)
    {
        if(tempDict.ContainKey(userId)
        {
            if(tempDict[userId].Count == 2)
            {
                string myString = tempDict[userId][0] + tempDict[userId][1] + pageId;
                if(visitDict.ContainsKey(myString) visitDict[myString]++;
                else visitDict.Add(myString,1);
                tempDict[userId] = new List<string>();
            }
            else if(tempDict[userId].Count < 2)
            {
                tempDict.Add(userId, new List<string>(){pageId});
            }
        }
    }

    private string mostPopular()
    {

        Dictionary<string, int> final = new Dictionary<string,int>(); // here you count 3-tuple -> int
        foreach(var s in myList)
        {
            if(final.ContainsKey(s) final[s]++;
            else final.Add(s,1);
        }

          string maxString = string.Empty;
          int max = 0;
          foreach(var kv in final){
          if(kv.Value > max){
          max = kv.Value;
          maxString = kv.Key;
          }

          return maxString;
    }
}
//=================
