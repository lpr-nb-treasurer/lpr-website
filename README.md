# Lambda Psi Rho Website
This git repository contains the source code for the LPR website hosted at lambdapsirho.org. This website uses the Jekyll library which is extremely useful for building websites with multiple static pages. 

## Contributing
If you need to change the content of a website, it is important to understand where the content is being loaded in from. In Jekyll, there exists a concept called `Front Matter`. Front Matter is basically just the content you want on a web page that is defined using `.md` files.

The Front Matter for this project has been placed inside the `pages` directory.

Lets take a look at an example:
This is the front matter found in `pages/brothers/founding.md`.
```markdown
---
layout: default
title: "Lambda Psi Rho - Founding Chapter"
permalink: /founding
---
<div>HTML content goes here</div>
```

layout: This specifies the base HTML page to insert our content into. You can find the layouts in the `_layouts` directory.

title: This is the title of the page. This is what will show on the window handle.

permalink: this is the path to the page in the url. This translates to "This page can be found at lambdapsirho.org/founding".

content: Anything after the second group of `---` will be inserted into the layout specified as HTML code. This is the meat of the page, and you can put whatever you need here.


## Git
Before making changes to the website, you need a github account and contributing access to this repository. 

1. Make a new branch (not Master)
   
   ```git checkout -b "new-feature"```
2. Make your changes
3. Commit and push your changes

```git commit -m "I made these changes"```

```git push```

3. Create a Pull Request for your changes 

https://github.com/lpr-nb-treasurer/lpr-website/pulls

4. Merge your branch into master
5. Wait for the github actions pipeline to deploy your changes.

https://github.com/lpr-nb-treasurer/lpr-website/actions

6. Check the website to see that your changes are there.

https://lambdapsirho.org

You can reach out to Brother Ryan Kim for help if needed.