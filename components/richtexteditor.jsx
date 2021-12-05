import dynamic from 'next/dynamic';
const SunEditor = dynamic(() => import("suneditor-react"), {
	ssr: false,
});
import 'suneditor/dist/css/suneditor.min.css';


const RichTextEditor = ({ index, setValue, getValues, quiz }) => {
	let question = ''

	const buttonList = [
		['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
		['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
		['outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
		['fullScreen', 'showBlocks', 'codeView', 'print']
	];

	if (quiz != '') {
		question = getValues(`item.${index}.question`)
	}

	function handleChange(content) {
		setValue(`item.${index}.question`, content)
	}

	return (
		<SunEditor
			defaultValue={question}
			onChange={handleChange}
			setOptions={{
				minHeight: "100px",
				height: 'auto',
				buttonList: buttonList
			}}
		/>
	)
}

export default RichTextEditor
