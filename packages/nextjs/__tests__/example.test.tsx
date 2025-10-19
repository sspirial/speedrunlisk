const { render, screen } = require('@testing-library/react');
const ExampleComponent = require('../path/to/your/component'); // Adjust the path accordingly

test('hello world!', () => {
	render(<ExampleComponent />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});