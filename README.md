# Day2Day
<h2>Welcome to my portfolio!</h2>
<p>I originally started on this project to focus on frontend development. Where I created the HTML, CSS, and Javascript. The project has evolved to include React to seamlessly combine all the elements together.
</p>

<p>After learning frontend development I soon shifted my focus to learning about the cloud and primarily through AWS. I have recently passed the AWS Certified Cloud Practitioner exam and now have a goal to pass the AWS Certified Solutions Architect - Associate Certification.</p>

<p>While I study for these exams I also implement hands on experience to retain the information, but also push and showcase my skills. This initally started as a frontend project but quickly transitioned to building in the cloud, where I am following the Cloud Resume Challenge.
</p>

<h2>Update 4/22</h2>

<p>Through the use of AWS S3, Cloudfront, and Route 53 I have been able to create a domain and host my portolio on the cloud!</p>

<p>Services utilized:<br>
S3: storage of project in AWS and host static webpage.<br>
Cloudfront: connection to S3 bucket, but now caching the information at the edge to increase performance and reduce latency for the user.<br>
Route 53: creating domain to publicly host website. Also, utilized Certificate Manager in AWS to securely host the webpage (https).<br>
</p>

<h2>Update 4/23</h2>

<p>Addtion of number of views on the webpage to count how many times the page has been visted.</p>

<p>Services utilized:<br>
DynamoDB: databased to store number of views.<br>
Lambda: automatically runs a function to add to the viewer count, with the support of an IAM role.<br>
React: calls Lambda function via API when the webpage is visited.<br>
</p>

<h2>Update 4/29</h2>

<p>Integrated CICD: when pushing updates to GitHub the S3 bucket will also be updated in my AWS account to update the static website. Full CICD is now running with git push, npm build and npm deploy.</p>
