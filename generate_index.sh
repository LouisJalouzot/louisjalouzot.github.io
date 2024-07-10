#!/bin/bash

# Initialize the index.html content
echo "<html><body><h1>Index of HTML files</h1><ul>" > index.html

# Find all HTML files and append them to the index.html content
find . -type f -name "*.html" | while read filepath; do
    relative_path="${filepath#./}"
    echo "<li><a href=\"$relative_path\">$relative_path</a></li>" >> index.html
done
    
# Close the HTML tags
echo "</ul></body></html>" >> index.html