// frontend/src/components/PluginArchitecture.js

import React from 'react';
import Plugin from './Plugin';

const PluginArchitecture = () => {
  const plugins = [
    { name: 'Authentication', description: 'Provides user authentication functionality' },
    { name: 'Authorization', description: 'Handles role-based and permission-based access control' },
    { name: 'UserProfiles', description: 'Manages user profiles and settings' },
    { name: 'UserActivityTracking', description: 'Tracks user activity and provides analytics' },
    { name: 'ContentCreation', description: 'Allows users to create and manage content' },
    { name: 'ImageUpload', description: 'Enables image uploading and processing' },
    { name: 'VideoUpload', description: 'Enables video uploading and processing' },
    { name: 'TextEditor', description: 'Provides a text editor with formatting and styling options' },
    { name: 'EmbeddedMedia', description: 'Allows embedding of media content' },
    { name: 'FileEmbedding', description: 'Enables embedding of files' },
    { name: 'UserCommenting', description: 'Handles user commenting and discussion' },
    { name: 'NotificationSystem', description: 'Manages notifications and alerts' },
    { name: 'UserFollow', description: 'Enables user follow and unfollow functionality' },
    { name: 'ContentDiscovery', description: 'Provides content discovery and recommendations' },
    { name: 'UserGeneratedContentModeration', description: 'Moderates user-generated content' },
    { name: 'SocialMediaIntegration', description: 'Integrates with popular social media platforms' },
    { name: 'Branding', description: 'Allows customizable branding and white labeling' },
    { name: 'MobileResponsiveDesign', description: 'Ensures mobile-responsive design and mobile app support' },
    { name: 'RealTimeCollaboration', description: 'Enables real-time collaboration and co-authoring' },
    { name: 'VersionControl', description: 'Manages version control and history' },
    { name: 'WorkflowManagement', description: 'Handles workflow management and assignment' },
    { name: 'ProjectManagementIntegration', description: 'Integrates with project management tools' },
    { name: 'RolesAndPermissions', description: 'Manages customizable roles and permissions' },
    { name: 'AuditLogging', description: 'Logs and tracks user activity for auditing purposes' },
    { name: 'TwoFactorAuthentication', description: 'Provides two-factor authentication for enhanced security' },
    { name: 'ScalableArchitecture', description: 'Ensures scalable architecture and performance optimization' },
    { name: 'Documentation', description: 'Provides extensive documentation and support resources' },
    { name: 'EmailNotifications', description: 'Sends customizable email notifications and alerts' },
    { name: 'CalendarIntegration', description: 'Integrates with popular Calendar and scheduling tools' },
    { name: 'LanguageSupport', description: 'Supports multiple languages and locales' },
    { name: 'AccessibilityFeatures', description: 'Includes accessibility and usability features' },
    { name: 'ThemesAndLayouts', description: 'Allows customizable themes and layouts' },
    { name: 'PluginArchitecture', description: 'Enables extensible plugin architecture for adding new features and functionality' },
  ];

  return (
    <div>
      <h2>Plugin Architecture</h2>
      <p>
        The Plugin Architecture component provides a way to extend the functionality of the SocialGenie app
        by adding plugins. Each plugin is a separate component that can be developed independently and
        integrated into the app. This allows for easy customization and addition of new features and
        functionality.
      </p>
      <h3>Available Plugins:</h3>
      <ul>
        {plugins.map((plugin) => (
          <Plugin key={plugin.name} name={plugin.name} description={plugin.description} />
        ))}
      </ul>
    </div>
  );
};

export default PluginArchitecture;