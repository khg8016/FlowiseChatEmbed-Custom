type Props = {
  prompt: string;
  onPromptClick?: () => void;
  fontSize?: number;
};
export const GuidedQuestionBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <div
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'auto',
          'font-size': props.fontSize ? `${props.fontSize}px` : '15px', // Convert to string with unit
          'border-radius': '15px',
          cursor: 'pointer',
        }}
      >
        {props.prompt}
      </div>
    </div>
  </>
);
