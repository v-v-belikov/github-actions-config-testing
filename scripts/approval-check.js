const prNumber = context.payload.pull_request.number;
const reviewer = '${{ secrets.MANAGER_USERNAME }}'; // Используйте секрет, если нужно
const reviews = await github.rest.pulls.listReviews({
  owner: context.repo.owner,
  repo: context.repo.repo,
  pull_number: prNumber,
});

const approval = reviews.data.some(review => 
  review.user.login === reviewer && review.state === 'APPROVED'
);

core.setOutput("approved", approval)

console.log("textbfdfbdbddbsdv")
