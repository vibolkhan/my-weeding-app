
import React, { useState } from 'react';
import { View } from './types';
import Welcome from './components/Welcome';
import Invitation from './components/Invitation';
import Memories from './components/Memories';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSVP';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);

  const renderView = () => {
    switch (currentView) {
      case View.WELCOME:
        return <Welcome onOpen={() => setCurrentView(View.INVITATION)} />;
      case View.INVITATION:
        return (
          <Invitation 
            onViewMemories={() => setCurrentView(View.MEMORIES)}
            onViewStory={() => setCurrentView(View.STORY)}
            onViewRSVP={() => setCurrentView(View.RSVP)}
          />
        );
      case View.MEMORIES:
        return <Memories onBack={() => setCurrentView(View.INVITATION)} />;
      case View.STORY:
        return <LoveStory onBack={() => setCurrentView(View.INVITATION)} />;
      case View.RSVP:
        return <RSVP onBack={() => setCurrentView(View.INVITATION)} />;
      default:
        return <Welcome onOpen={() => setCurrentView(View.INVITATION)} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-[#1a1a10] shadow-2xl overflow-hidden">
      {renderView()}
    </div>
  );
};

export default App;
