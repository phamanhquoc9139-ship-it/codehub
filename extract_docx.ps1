$docx = 'C:\Users\ADMIN\.gemini\antigravity\brain\9168c62b-8394-4661-a83f-694947522547\.user_uploaded\media_1793508167216_0f11d73b.docx'
$zip = 'C:\Users\ADMIN\.gemini\antigravity\scratch\khtn6_docx.zip'
$dest = 'C:\Users\ADMIN\.gemini\antigravity\scratch\khtn6_docx'
Copy-Item $docx $zip -Force
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
Expand-Archive -Path $zip -DestinationPath $dest -Force
Get-ChildItem -Path "$dest\word\media" | Select-Object Name, Length
