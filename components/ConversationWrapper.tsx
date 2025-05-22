
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OriginalConversation from '../imports/Conversation';
import CreateReportButton from '../imports/Button-34-5294';

const ConversationWrapper: React.FC = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  
  // Always show the button instead of relying on scroll position
  useEffect(() => {
    // Always show the button
    setShowButton(true);
    
    // Add the necessary global styles using a style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      /* Set max-width for conversation containers */
      [data-name="Message content"],
      [data-name="Message container"],
      [data-name="Message container1"],
      [data-name="Accordion"],
      [data-name="_Accordion Content"],
      [data-name="Message text container"],
      [data-name="Media"],
      [data-name="Media content"] {
        max-width: 680px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      /* Right Section container */
      [data-name="Right Section"] > div > div {
        max-width: 680px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      
      /* REMOVE BORDER from the outer Message container div */
      [data-name="Message container"] > .absolute.border,
      [data-name="Message container"] > .absolute.border-solid,
      [data-name="Message container"] > .absolute.border-[0px_0px_1px],
      [data-name="Message container"].border,
      [data-name="Message container"] .border-solid {
        border: none !important;
        border-width: 0 !important;
        box-shadow: none !important;
      }
      
      /* REMOVE OUTER BORDER from the MessageContent1 div */
      [data-name="Message content"] {
        border: none !important;
        box-shadow: none !important;
        background-color: transparent !important;
      }
      
      /* REMOVE FIXED HEIGHT constraints */
      [data-name="Message content"],
      [data-name="Message content"] > div {
        height: auto !important;
        min-height: auto !important;
      }
      
      /* Target the specific message container for "Before I give you the report..." text */
      [data-name="Message container1"] .box-border.content-stretch.flex.flex-col.gap-2.items-start.justify-start.p-\\[12px\\].relative.w-full {
        border: 1px solid rgba(33, 33, 33, 0.12) !important;
        border-radius: 8px !important;
      }
      
      /* Remove the absolute positioned border div inside accordions */
      [data-name="Accordion"] > .absolute.border-[0px_0px_1px],
      [data-name="Accordion"] > .absolute.border,
      [data-name="Accordion"] > .absolute.border-solid,
      [data-name="Accordion"] > .absolute.border-[rgba(33,33,33,0.01)],
      [data-name="Accordion"] > .absolute {
        display: none !important;
      }
      
      /* Style each accordion as an individual box with border */
      [data-name="Accordion"] {
        border: 1px solid rgba(33, 33, 33, 0.12) !important;
        border-radius: 8px !important;
        margin-bottom: 8px !important;
        overflow: hidden !important;
      }
      
      /* Style the content inside accordions */
      [data-name="Accordion"] .box-border.content-stretch.flex.flex-col.items-center.justify-start.overflow-clip.p-0.relative.w-full {
        padding: 0 !important;
      }
      
      /* Add dividers between sections within accordions */
      [data-name="Accordion"] > div > [data-name="AccordionContent3"] {
        border-bottom: 1px solid rgba(33, 33, 33, 0.12) !important;
      }
      
      /* Restore arrows/checkboxes */
      [id="collapse"],
      [id="expand"],
      [data-name="Accordion"] [id="collapse"],
      [data-name="Accordion"] svg {
        display: block !important;
      }
      
      /* Style the accordion header */
      [data-name="Accordion"] .box-border.content-stretch.cursor-pointer.flex.flex-row.h-10.items-center.justify-between.px-3.py-0.relative.w-full {
        border-bottom: 1px solid rgba(33, 33, 33, 0.12) !important;
        background-color: rgba(249, 249, 249, 0.5) !important;
      }
      
      /* Style form sections for visual separation */
      [data-name="Media"], 
      [data-name="Media1"],
      [data-name="Media2"],
      [data-name="Media3"] {
        padding: 12px !important;
      }
      
      /* Style the accordion container */
      [data-name="AccordionContainer"],
      [data-name="AccordionContainer1"],
      [data-name="AccordionContainer2"],
      [data-name="AccordionContainer3"] {
        margin-bottom: 8px !important;
      }
      
      /* Add spacing for the Create Report button */
      [data-name="HandIcons"],
      [data-name="AttrubutionModel"] ~ div,
      [data-name="AttributionModel"] ~ div {
        margin-bottom: 16px !important;
      }
      
      /* Apply consistent styling to form sections */
      [data-name="AccordionSet"] > div {
        gap: 8px !important;
      }
      
      /* Ensure proper spacing within accordion content */
      [data-name="_Accordion Content"] {
        padding: 12px !important;
      }
      
      /* Ensure checkboxes are visible and styled correctly */
      [id^="Vector"] path[fill="var(--fill-0, #1D9F9F)"] {
        fill: #1D9F9F !important;
      }
      
      /* Neutral states for form elements */
      [id^="Vector"] path[fill="var(--fill-0, #616161)"],
      [id="collapse"] path[fill="var(--fill-0, #616161)"] {
        fill: rgba(33, 33, 33, 0.87) !important;
      }
      
      /* Fix form inputs and checkboxes */
      [data-name="Accordion"] input[type="checkbox"],
      [data-name="Accordion"] input[type="radio"] {
        margin-right: 8px !important;
      }
      
      /* Hide thumbs icons below Attribution model text in PR Impact conversation */
      [data-name="AttributionModel"] ~ div [data-name*="Thumbs"],
      [data-name="AttrbutionModel"] ~ div [data-name*="Thumbs"],
      [data-name="Accordion"] [data-name*="Attribution"] ~ div [data-name*="Thumbs"],
      .conversation-wrapper [data-name*="Thumbs"] {
        display: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Function to remove thumbs icons through DOM manipulation
    const removeThumbs = () => {
      // Find all thumbs icons near Attribution model text
      const attributionSections = document.querySelectorAll('[data-name*="Attribution"], [data-name*="Attrubution"]');
      
      attributionSections.forEach(section => {
        // Get all thumbs icons in the section's parent
        const thumbsIcons = section.parentElement?.querySelectorAll('[data-name*="Thumbs"]');
        if (thumbsIcons) {
          thumbsIcons.forEach(icon => {
            icon.remove();
          });
        }
        
        // Also try to find icons in siblings
        let sibling = section.nextElementSibling;
        while (sibling) {
          const thumbsInSibling = sibling.querySelectorAll('[data-name*="Thumbs"]');
          thumbsInSibling.forEach(icon => {
            icon.remove();
          });
          sibling = sibling.nextElementSibling;
        }
      });
    };
    
    // Run the removal function immediately
    removeThumbs();
    
    // Also run it periodically in case content changes
    const intervalId = setInterval(removeThumbs, 1000);
    
    // Clean up function to remove the style element and interval when component unmounts
    return () => {
      document.head.removeChild(styleElement);
      clearInterval(intervalId);
    };
  }, []);
  
  const handleCreateReport = () => {
    navigate('/brand-report');
  };

  return (
    <div 
      className="conversation-wrapper relative w-full h-full overflow-auto"
    >
      {/* Original conversation component */}
      <div className="conversation-content conversation-container">
        <OriginalConversation />
      </div>
      
      {/* Create Report button - positioned below Attribution Model section */}
      {showButton && (
        <div 
          className="w-full max-w-[680px] mx-auto mt-4 mb-8 flex justify-end"
        >
          <div 
            className="w-[140px] h-9 cursor-pointer" 
            onClick={handleCreateReport}
          >
            <CreateReportButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationWrapper;
