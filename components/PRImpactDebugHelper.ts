
/**
 * Debug helper for PR Impact view
 * This is a fallback mechanism to ensure the Create Report button appears
 * only if the React component rendering fails to show the button.
 */

export function debugPRImpactButtonInjection(): void {
  console.log('Running PR Impact debug helper (fallback mechanism)...');
  
  // Check if a button already exists (either from React component or previous injection)
  const existingButton = document.querySelector('.create-report-button-container');
  if (existingButton) {
    console.log('Create Report button already exists, no fallback needed');
    return; // Exit early if button already exists
  }
  
  // Find conversation container as the main target
  const conversationContainer = findConversationEnd();
  if (!conversationContainer) {
    console.error('Failed to find a suitable container for the button');
    return;
  }
  
  // Inject the button at the found location
  injectButton(conversationContainer);
}

/**
 * Finds the appropriate element at the end of the conversation
 * to place the button
 */
function findConversationEnd(): Element | null {
  // First try to find the conversation-content container 
  // (this should exist if the React component rendered correctly)
  const conversationContainer = document.querySelector('.conversation-content');
  if (conversationContainer) return conversationContainer;
  
  // If we can't find the specific container, try to get the last message container
  const messageContainers = document.querySelectorAll('[data-name="Message container"], [data-name="Message container1"]');
  if (messageContainers.length > 0) return messageContainers[messageContainers.length - 1];
  
  // Last resort - find the deepest chat message
  const chatMessages = document.querySelectorAll('[data-name="chat message"]');
  if (chatMessages.length > 0) return chatMessages[chatMessages.length - 1];
  
  return null;
}

/**
 * Creates and injects the button at the end of the conversation
 */
function injectButton(targetElement: Element): void {
  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'create-report-button-container';
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 16px 280px 16px;
    position: relative;
    z-index: 999;
    margin-top: 32px;
    border-top: 1px solid rgba(33,33,33,0.08);
    padding-top: 40px;
  `;
  
  // Create button
  const button = document.createElement('button');
  button.textContent = 'Create Report';
  button.className = 'create-report-button-element';
  button.style.cssText = `
    height: 40px;
    width: 180px;
    background-color: #1D9F9F;
    color: white;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    position: relative;
    border-radius: 6px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: pulse 2s infinite;
    transition: all 0.2s ease;
  `;
  
  // Add hover effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#17908F';
    button.style.transform = 'translateY(-1px)';
    button.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#1D9F9F';
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
  });
  
  // Add click handler using the global function if available
  button.onclick = () => {
    if (window.togglePRCanvas) {
      window.togglePRCanvas();
    } else {
      console.warn('togglePRCanvas function not found - canvas toggle may not work');
    }
  };
  
  buttonContainer.appendChild(button);
  
  // Create a spacer element for extra space below the button
  const spacer = document.createElement('div');
  spacer.className = 'after-button-spacer';
  spacer.style.cssText = `
    height: 180px;
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: 120px;
  `;
  
  // Add to DOM in appropriate location
  if (targetElement.classList.contains('conversation-content')) {
    // Append as the last child of the conversation container
    targetElement.appendChild(buttonContainer);
    targetElement.appendChild(spacer);
  } else {
    // Insert after the target element
    targetElement.insertAdjacentElement('afterend', buttonContainer);
    buttonContainer.insertAdjacentElement('afterend', spacer);
  }
  
  console.log('Fallback Create Report button injected successfully');
}

// Define togglePRCanvas on window interface
declare global {
  interface Window {
    togglePRCanvas?: () => void;
  }
}

export default debugPRImpactButtonInjection;
