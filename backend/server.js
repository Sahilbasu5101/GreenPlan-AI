import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Base Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'GreenPlan AI Backend API',
    stack: 'MERN (MongoDB, Express, React, Node.js)',
    timestamp: new Date().toISOString()
  });
});

// Mock / Seed endpoints for GreenPlan AI
app.get('/api/v1/greening/trees', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'GP-TREE-DEL-0419',
        species: 'Azadirachta indica (Neem)',
        site: 'Ward 4 · School Perimeter Zone B',
        coordinates: [77.2090, 28.6139],
        canopyCoverM2: 14.2,
        status: 'Healthy',
        survivalProbability: 0.88,
        soilPH: 7.1
      }
    ]
  });
});

app.get('/api/v1/alerts', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'ALT-FAC-2026-992',
        facility: 'Kendriya Vidyalaya School · Ward 4',
        type: 'School Outdoor Restriction',
        pm25Value: 184,
        threshold: 150,
        status: 'Pending Review',
        humanApprovalRequired: true
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`GreenPlan AI Express Server running on port ${PORT}`);
});
