import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import TwigTemplate from '../../lib/parse.js';

function StandardsTable(scores) {
  const scoreDescriptors = scores.scores.scoreDescriptors;
  if (scoreDescriptors.length < 1) {
    return null;
  }

  let results = [];
  scoreDescriptors.forEach(scoreDescriptor => {
    const category = scoreDescriptor.ScoreCategory;
    const description = scoreDescriptor.Description;
    results[category] = description;
  });

  const table = '<table>' +
    '<tr>' +
    '<th>Area inspected by food safety officer</th>' +
    '<th>Standards found</th>' +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '<strong>Hygienic food handling</strong>' +
    '<p>Hygienic handling of food including preparation, cooking, re-heating, cooling and storage</p>' +
    '</td>' +
    `<td>${results.Hygiene}</td>` +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '<strong>Cleanliness and condition of facilities and building\n</strong>' +
    '<p>Cleanliness and condition of facilities and building (including having appropriate layout, ventilation, hand washing facilities and pest control) to enable good food hygiene</p>' +
    '</td>' +
    `<td>${results.Structural}</td>` +
    '</tr>' +
    '<tr>' +
    '<td>' +
    '<strong>Management of food safety\n</strong>' +
    '<p>System or checks in place to ensure that food sold or served is safe to eat, evidence that staff know about food safety, and the food safety officer has confidence that standards will be maintained in future\n' +
    '</p>' +
    '</td>' +
    `<td>${results.Confidence}</td>` +
    '</tr>' +
    '</table>'

  const content = {
    content: table,
  };
  return (
    <>
      <TwigTemplate template={textBlock} values={content} attribs={[]}/>
    </>
  )
}

export default StandardsTable;