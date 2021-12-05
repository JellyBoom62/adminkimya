export interface Quiz {
	testName: string;
	time: string;
	description: string;
	item: [{
		question: string;
		questionType: string;
		variants: [{
			value: string;
		}]
		answer: string;
		answers: [{
			value: string
		}];
	}]
}