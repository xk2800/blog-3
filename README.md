# Blog using Astro and Tina CMS

## Introduction

This one of my personal projects where this is an experimental blog built on Astro with it's blog content being written to .md files and controlled by git's source control instead of the conventional database. Tina CMS acts as a ease of use tool where by using Tina CMS, it enables non dev's to be able to write content onto the blog as well.

## Tech Stack

- Astro (TypeScript)
- Tina CMS
- Tailwind CSS

> Currently, Tina CMS is only available via localhost and updating any content would require a git commit to this repo.

## Todo List

1. [ 👨🏻‍💻 ] Enable guest writers to add their own name into a custom dropdown when they select "Guest Writer in "Author" field. [^1]
2. [ 👨🏻‍💻 ] Enable tags to be added into Tina CMS. (Currently unable to find a solution for this besides using ['Custom Components'](https://tina.io/docs/extending-tina/custom-field-components/)). [^1]
3. [ 👨🏻‍💻 ] Allow users to add images into the post. Plan to look into adding _Cloudinary_ into this feature to take the load of uploading images from git. [^1]
4. [ 👨🏻‍💻 ] Update overall style of the FE pages to my design's.

[^1]: Due to the limitations of Tina CMS, this feature might not be deprioritized.

## Future considerations

1. Enabling Tina CMS to live on a self-hosted/Tina CMS cloud to enable ease of use of non dev users.
2. Changing to a more flexible CMS solution if Tina CMS turns out to restrict future feature development.

## Contributions

I am open to contributions or suggestions on how I could implement items in the Todo List or any improvements that could be done to my current codebase as I am fairly new to Astro and my first time of hearing about Tina CMS, let alone use it in my tech stack. Thank you in advance!
