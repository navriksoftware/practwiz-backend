export const insertMentorCaseStudyQuery = `INSERT INTO [dbo].[case_studies_dtls] 
(
    [case_study_dtls_user_id],
    [case_study_dtls_mentor_id],
    [case_study_dtls_topic_category],
    [case_study_dtls_title],
    [case_study_dtls_summary]
    ,[case_study_dtls_background]
    ,[case_study_dtls_main_challenge]
    ,[case_study_dtls_no_characters]
    ,[case_study_dtls_roles]
    ,[case_study_dtls_main_role]
    ,[case_study_dtls_lesson_learn]
    ,[case_study_dtls_skills_to_develop]
    ,[case_study_dtls_resources]
)
VALUES 
(
    @userId,
    @mentorId,
    @caseCategory,
    @caseTitle,
    @caseSummary,
    @caseBackground,
    @challenge,
    @characters,
    @roles,
    @roleOfMainCharacter,
    @lesson,
    @futureSkills,
    @resource
);
`;
