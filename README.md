# GithubTocGenerator
Chrome extension to generate a table of contents for Github wiki and markdown pages. The extension adds a context menu to any URL matching _\*://\*.github.com/\*/wiki\*_ or _\*://\*.github.com/\*.md_ that allows you to generate a table of contents in markdown. The script pulls all H1-H6 elements from the wiki page contents (from the _.markdown-body_ div) and outputs them in a formatted list with anchor links.

Context menu screenshot:

![Context Menu](https://github.com/T-Boss/GithubTocGenerator/blob/master/img/menu.png)

Example output from [RestSharp's wiki](https://github.com/restsharp/RestSharp/wiki):

    # Table of Contents
    * [Contents](#contents)
      * [Have a feature idea to discuss or running into an issue while using RestSharp? Start at the Google Group](#have-a-feature-idea-to-discuss-or-running-into-an-issue-while-using-restsharpstart-at-the-google-group)
    * [Contribution Submission Guidelines](#contribution-submission-guidelines)
    * [Docs](#docs)
    * [Miscellany](#miscellany)
